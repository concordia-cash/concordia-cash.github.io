import os
import re
import shutil
import requests
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import markdown
from datetime import datetime

# === Settings ===
BASE_HTML_PATH = "template.html"
OUTPUT_HTML_PATH = "public/index.html"
ASSETS_FOLDER = "assets"
PUBLIC_FOLDER = "public"
IMAGE_FOLDER = f"{PUBLIC_FOLDER}/images"

MARKDOWN_URLS = {
    "whitepaper": "https://raw.githubusercontent.com/concordia-cash/whitepaper/main/README.md",
    "branding": "https://raw.githubusercontent.com/concordia-cash/branding/main/README.md"
}

def download_image(url, base_folder, section):
    os.makedirs(base_folder, exist_ok=True)
    try:
        parsed_url = urlparse(url)
        filename = os.path.basename(parsed_url.path)
        subfolder = Path(base_folder) / section
        os.makedirs(subfolder, exist_ok=True)
        output_path = subfolder / filename

        if output_path.exists():
            return f"images/{section}/{filename}"

        r = requests.get(url)
        r.raise_for_status()
        with open(output_path, "wb") as f:
            f.write(r.content)

        return f"images/{section}/{filename}"
    except Exception as e:
        print(f"[WARN] Failed to download {url}: {e}")
        return url

def replace_markdown_images(md, folder, section):
    def repl(match):
        alt, url = match.groups()
        new_path = download_image(url, folder, section)
        return f"![{alt}]({new_path})"
    return re.sub(r'!\[(.*?)\]\((\S+?)(?:\s+".*?")?\)', repl, md)

def replace_html_images(html, folder, markdown_base_url, section):
    soup = BeautifulSoup(html, "html.parser")
    for img in soup.find_all("img"):
        src = img.get("src", "")
        if not src:
            continue
        full_url = src if src.startswith("http") else urljoin(markdown_base_url, src)
        new_src = download_image(full_url, folder, section)
        img['src'] = new_src
    return str(soup)

def convert_markdown_to_html(md_text, folder, markdown_url, section):
    md_with_local_images = replace_markdown_images(md_text, folder, section)
    html = markdown.markdown(md_with_local_images, extensions=["tables"])
    html_with_local_images = replace_html_images(html, folder, markdown_url, section)
    return html_with_local_images

def build_html(template_path, output_path, rendered_blocks):
    with open(template_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Replace markdown blocks
    for key, content in rendered_blocks.items():
        placeholder = f"<!--__{key.upper()}_HTML__-->"
        html = html.replace(placeholder, content)

    # Replace copyright year
    current_year = datetime.now().year
    html = html.replace("<!--__COPYRIGHT_YEAR__-->", str(current_year))

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

def copy_static_assets():
    print(f"🔄 Copying static assets from `{ASSETS_FOLDER}` to `{PUBLIC_FOLDER}`...")

    if not os.path.exists(ASSETS_FOLDER):
        print(f"[WARN] Assets folder `{ASSETS_FOLDER}` not found.")
        return

    for root, dirs, files in os.walk(ASSETS_FOLDER):
        for file in files:
            src_path = os.path.join(root, file)
            rel_path = os.path.relpath(src_path, ASSETS_FOLDER)
            dst_path = os.path.join(PUBLIC_FOLDER, rel_path)

            os.makedirs(os.path.dirname(dst_path), exist_ok=True)
            shutil.copy2(src_path, dst_path)

def main():
    if os.path.exists(PUBLIC_FOLDER):
        print(f"🧹 Cleaning `{PUBLIC_FOLDER}`...")
        shutil.rmtree(PUBLIC_FOLDER)
    os.makedirs(PUBLIC_FOLDER, exist_ok=True)
    os.makedirs(IMAGE_FOLDER, exist_ok=True)

    rendered_blocks = {}
    for key, url in MARKDOWN_URLS.items():
        print(f"⚙️ Processing {key} from {url}")
        md = requests.get(url).text
        html = convert_markdown_to_html(md, IMAGE_FOLDER, url, key)
        rendered_blocks[key] = html

    build_html(BASE_HTML_PATH, OUTPUT_HTML_PATH, rendered_blocks)
    copy_static_assets()
    print(f"\n✅ Static site built: {OUTPUT_HTML_PATH}")

if __name__ == "__main__":
    main()
