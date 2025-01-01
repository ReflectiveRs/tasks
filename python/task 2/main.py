import generate_items

from flask import Flask, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        try:
            num = int(request.form['num'])
            res = generate_items.create()
            return f'<div>Цвет предмета <b>{res[num]}</b></div>'
        except ValueError:
            return '<div>Введены некорректные данные!</div>'

    return '''
            <form action="/" method="post">
                <div>Напишите номер предмета и попытайтесь угадать его цвет.</div>
                <p><span>Номер </span><input type=text name=num></p>
                <p><input type=submit value=Press>
            </form>
        '''


if __name__ == "__main__":
    app.debug = True
    app.run("127.0.0.1", port='8081')


