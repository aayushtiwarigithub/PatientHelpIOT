import numpy as np
from flask import Flask, request, jsonify
import pickle
import json
from flask_cors import CORS
import sms

app = Flask(__name__)
CORS(app)
model = pickle.load(open('model.pkl','rb'))

@app.route('/home')
def home():
    result = "document"
    output = list()
    output.append(result)
    return jsonify(output)

@app.route('/api',methods=['POST'])
def predict():
    data = request.form
    input = list()
    for item in data.items():
        input.append(json.loads(item[1]))
    prediction = model.predict(input)
    output = prediction.tolist()
    return jsonify(output)

@app.route('/sms')
def getsms():
    result = sms.sms()
    output = list()
    output.append(result)
    return jsonify(output)

if __name__ == '__main__':
    app.run(port=5000, debug=True)