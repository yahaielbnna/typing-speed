let text = document.querySelector('.text-container').innerText,
    splited_ = text.split(''),
    text_area = document.querySelector('Gm_textarea__'),
    text_area_value = '',
    first_time, last_time, timer, net_wpm, gross_wpm, i = 0, score = 0, wrong = 0;

window.addEventListener('keypress', e => {
    if (text_area_value == "") {
        let time = new Date()
        first_time = time.getTime();
    }
    if (splited_[i] == e.key) {
        i++;
        score++;
        text_area_value += e.key;
        if (e.key == ' ') {
            gm(text_area).child('.text-area font').padding('0px 15px 0px 0px')
        } else {
            gm(text_area).child('.text-area font').padding(0)
        }
        gm(text_area).child('.text-area font').text(text_area_value)
        if (text_area_value == text) {
            let time__ = new Date();
            last_time = time__.getTime();

            timer = (last_time - first_time) / 1000;
            gross_wpm = ((text.length / 5) / (timer / 60));
            net_wpm = (((text.length / 5) - wrong) / (timer / 60));
            net_wpm = Math.floor(net_wpm);
            gross_wpm = Math.floor(gross_wpm);
            result__();
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
        .text(`${timer} s`)
        .parent(2)
        .insert('div')
        .addClass('row')
        .insert('h4')
        .text(`Gross WPM`)
        .parent()
        .insert('span')
        .text(`${gross_wpm}`)
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
        .addClass('retry')
        .insert('button')
        .text('Retry')
        .event('click', e => {
            gm(e.target).parent(5).remove();
            text_area_value = '';
            gm(text_area).child('.text-area font').text(text_area_value)
            i = 0
            score = 0
            wrong = 0
            gm('.score-number').text(score);
        })
}

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}


if (isMobile()) {
    gm('body')
        .insert('div')
        .addClass('popup')
        .insert('div')
        .addClass('window')
        .width('90%')
        .insert('div')
        .addClass('window-body')
        .insert('div')
        .display('flex')
        .justify('center')
        .alignItems('center')
        .insert('img')
        .addAttr('src', 'assets/images/no.gif')
        .width(100)
        .parent(2)
        .insert('h2')
        .addClass('sorry')
        .text('Sorry !')
        .parent()
        .insert('h3')
        .text('This website can only be accessed through a desktop device.')
        .parent()
        .insert('div')
        .html(`
        <footer class="footer" style="border-top: 2px solid #0000004f;margin: 15px 0 0">
            Made with
            <span style="color: red; font-size: 15px">&#10084;</span> by -
            <a target="_blank"
                href="#"> Yahia Elbanna </a>
            <br />
            <div class="social-links"
                style="margin-top: 20px;">
                <a href="https://github.com/yahaielbnna"
                    target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://codepen.io/yahiaelbnna"
                    target="_blank">
                    <i class="fa-brands fa-codepen"></i>
                </a>
                <a href="https://www.facebook.com/yahia.elbanna.3"
                    target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/yahia-elbnna/"
                    target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </footer>`)
}