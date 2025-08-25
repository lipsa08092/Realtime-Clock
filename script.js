        const deg = 6;  //360degree/60min=6degree Per min
        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc');

        setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30; //360degree/12hours=30degree Per hour
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`; // let time is 3.30 , then hh=3*30 = 90 and mm=30*6 = 180 so hour hand is 90+180/12 = 105
            mn.style.transform = `rotateZ(${mm}deg)`;  //mm = minute*6 degree , so 30 min = 30*6=180 degree
            sc.style.transform = `rotateZ(${ss}deg)`;  //ss = second*6 degree , so 15 sec = 15*6=90 degree
        })