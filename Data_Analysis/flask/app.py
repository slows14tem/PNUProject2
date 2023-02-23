from flask import Flask, render_template, request
import pickle

app = Flask(__name__)

# 모델, vectorizer, label encoder 불러오기
with open('flask/model.pickle', 'rb') as f:
    model = pickle.load(f)
with open('flask/vectorizer.pickle', 'rb') as f:
    vectorizer = pickle.load(f)
with open('flask/label_encoder.pickle', 'rb') as f:
    le = pickle.load(f)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # 예측값 입력 받기
        data1 = request.form['data1']
        data2 = request.form['data2']
        data3 = request.form['data3']
        data4 = request.form['data4']
        data5 = request.form['data5']
        data = [data1 + ' ' + data2 + ' ' + data3 + ' ' + data4 + ' ' + data5]
        # feature vector 생성
        X = vectorizer.transform(data)
        # 모델 예측
        y_pred = model.predict(X)
        # 예측 결과 label로 변환
        y_pred_label = le.inverse_transform(y_pred)
        # 결과 출력 페이지 렌더링
        return render_template('result.html', data=data[0], prediction=y_pred_label[0])
    else:
        # 입력 폼 렌더링
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

