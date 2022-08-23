from flask import Flask, render_template, request
import sqlite3
import os


app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def addrec():
    dir_path = os.path.dirname(os.path.realpath(__file__))
    db_path = os.path.join(dir_path, 'patient.db')
    con = sqlite3.connect(db_path)

    if request.method == 'POST':
        try:
            name = request.form['name']
            mail = request.form['mail']
            date = request.form['date']
            time = request.form['time']
            total = request.form['sel']

            print(name, mail, date, time, total)

            cur = con.cursor()
            cur.execute("INSERT INTO people (name, mail, date, time, count) VALUES (?,?,?,?,?)",
                        (name, mail, date, time, total))

            con.commit()
            con.close()

        except:
            con.rollback()
            con.close()
        finally:
            return render_template("home.html")
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)
