let pdata = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const add = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    let patient = {
        name: document.getElementById('name').value,
        mail: document.getElementById('mail').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        total: document.getElementById('sel').value
    }
    pdata.push(patient);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added', { pdata });

}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn1').addEventListener('click', add);
});
