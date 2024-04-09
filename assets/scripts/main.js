let text = document.querySelector('.text-container').innerText,
    splited_ = text.split(''),
    text_area = document.querySelector('Gm_textarea__'),
    text_area_value = '',
    first_time, last_time, timer, net_wpm, gross_wpm, i = 0, score = 0, wrong = 0;

// window.onclick = _ => {
//     text_area.focus();
// }

window.addEventListener('keypress', e => {
    // console.log(e);
    if (text_area_value == "") {
        let time = new Date()
        first_time = time.getTime();
    }
    if (splited_[i] == e.key) {
        i++;
        score++;
        text_area_value += e.key;
        // console.log(text_area_value);
        if (e.key == ' ') {
            gm(text_area).child('.text-area font').padding('0px 15px 0px 0px')
        } else {
            gm(text_area).child('.text-area font').padding(0)
        }
        gm(text_area).child('.text-area font').text(text_area_value)
        if (text_area_value == text) {
            // console.log('done');
            let time__ = new Date();
            last_time = time__.getTime();

            timer = (last_time - first_time) / 1000;
            gross_wpm = ((text.length / 5) / (timer / 60));
            net_wpm = (((text.length / 5) - wrong) / (timer / 60));
            net_wpm = Math.floor(net_wpm);
            gross_wpm = Math.floor(gross_wpm);
            result__();

            // console.log(i);
            // console.log(first_time);
            // console.log(last_time);
            // Math.floor(diff / 1000 % 60)
            // console.log(Math.floor((last_time - first_time) / 1000 % 60));
        }
    } else {
        if (text_area_value !== text) {
            score -= 1 / 2;
            wrong += 1;
        }
    }

    gm('.score-number').text(score);
})

function result__() {
    gm('body')
        .insert('div')
        .addClass('popup')
        .insert('div')
        .addClass('window')
        .insert('div')
        .addClass('icon')
        .html(`<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="#0888bb" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 12 2 2 5-5m4.5 5.3 1-.9a2 2 0 0 0 0-2.8l-1-.9a2 2 0 0 1-.6-1.4V7a2 2 0 0 0-2-2h-1.2a2 2 0 0 1-1.4-.5l-.9-1a2 2 0 0 0-2.8 0l-.9 1a2 2 0 0 1-1.4.6H7a2 2 0 0 0-2 2v1.2c0 .5-.2 1-.5 1.4l-1 .9a2 2 0 0 0 0 2.8l1 .9c.3.4.6.9.6 1.4V17a2 2 0 0 0 2 2h1.2c.5 0 1 .2 1.4.5l.9 1a2 2 0 0 0 2.8 0l.9-1a2 2 0 0 1 1.4-.6H17a2 2 0 0 0 2-2v-1.2c0-.5.2-1 .5-1.4Z"/>
  </svg>`)
        .insert('h2')
        .text('Here are your numbers')
        .parent(2)
        .insert('div')
        .addClass('window-body')
        .insert('div')
        .addClass('numbers')
        .insert('div')
        .addClass('process-container')
        .insert('div')
        .addClass('process')
        .insert('div')
        .width(`${(score / splited_.length) * 100}%`)
        .parent(2)
        .insert('h1')
        .text(`${score} point`)
        .parent(2)
        .insert('div')
        .addClass('row')
        .insert('h4')
        .text(`typing time`)
        .parent()
        .insert('span')
        .text(`${timer}s`)
        .parent(2)
        .insert('div')
        .addClass('row')
        .insert('h4')
        .text(`Net WPM`)
        .parent()
        .insert('span')
        .text(`${net_wpm}`)
        .parent(2)
        .insert('div')
        .addClass('row')
        .insert('h4')
        .text(`Gross WPM`)
        .parent()
        .insert('span')
        .text(`${gross_wpm}`)
}
// window.onkeyup = e => {

// }

// gm(text_area).event('keyup', e => {
//     if (text_area_value == "") {
//         // i = 0;
//         let time = new Date()
//         first_time = time.getTime();
//     }
//     text_area_value = text_area.value;

//     if (splited_[i] == e.key) {
//         // console.log(e.key);
//         // i += 1;
//     } else {
//         text_area.value = text_area_value.slice(0, -1)
//         // console.log(i);
//         // console.log(splited_[i]);
//         // console.log(e.key);
//         // e.preventDefault();
//         // return false;
//     }
//     // Backspace
//     let text_area_value__splited = text_area.value.split('');
//     i = text_area_value__splited.length;
//     console.log(text_area_value__splited);
//     console.log(text_area_value__splited.length);
// });