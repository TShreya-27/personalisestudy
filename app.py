from flask import Flask, request, jsonify
from flask_ngrok import run_with_ngrok

app = Flask(__name__)
run_with_ngrok(app)  # Start ngrok when app is run

@app.route('/')
def index():
    return 'Flask server is running'

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    response = {
        'message': 'Data received',
        'data': data
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run()
