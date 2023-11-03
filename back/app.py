from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/process', methods=['POST'])
def process_text():
    data = request.get_json()
    text = data['text']
    processed_text = text + ' + hello world!'
    return jsonify({'text': processed_text})
