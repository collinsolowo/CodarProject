import './imageSlide.css'
// import pic1 from './slider2.png


function Slider() {
    function showTime() {
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";

        if (h === 0) {
            h = 12;
        }

        if (h > 12) {
            h = h - 12;
            session = "PM";
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        var time = h + ":" + m + ":" + s + " " + session
        // document.getElementById("MyClockDisplay").textContent = time;

        setTimeout(showTime, 1000);
        let slider = document.querySelector('.slide-house')
        if (s === 10) {
            slider.classList.remove('six')
            slider.classList.add('one')
        }
        else if (s === 20) {
            slider.classList.remove('one')
            slider.classList.add('two')
        }
        else if (s === 30) {
            slider.classList.remove('two')
            slider.classList.add('three')

        }
        else if (s === 40) {
            slider.classList.remove('three')
            slider.classList.add('four')
        }
        else if (s === 50) {
            slider.classList.remove('four')
            slider.classList.add('five')
        }
        else if (s === 59) {
            slider.classList.remove('five')
            slider.classList.add('six')
        };
        // console.log(s)
    }

    // showTime();
    return (
        <>
            <section id="MyClockDisplay" class="clock" onLoad={showTime()}>
              <div className='slide-house'>
              </div>
            </section>
        </>
    )


}

export default Slider