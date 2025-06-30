# receiver.py
from http.server import HTTPServer, BaseHTTPRequestHandler
import os

UPLOAD_DIR = "exfiltrated_files"

class SimpleFileReceiver(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        field_data = self.rfile.read(content_length)

        filename = self.headers.get('X-Filename', 'received_file')
        os.makedirs(UPLOAD_DIR, exist_ok=True)

        filepath = os.path.join(UPLOAD_DIR, filename)
        with open(filepath, 'wb') as f:
            f.write(field_data)

        print(f"[+] Received file saved to: {filepath}")
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'OK')

if __name__ == "__main__":
    PORT = 8087
    print(f"[+] Starting receiver on http://0.0.0.0:{PORT}")
    server = HTTPServer(("0.0.0.0", PORT), SimpleFileReceiver)
    server.serve_forever()
