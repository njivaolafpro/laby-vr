console.log('main js working');

const setup = () => {
    console.info('setting up');


    // setting up box raycasting
    // Component to change to a sequential color on click.
    /*AFRAME.registerComponent('cursor-listener', {
        init: function () {
            console.log('init is called;');
            var lastIndex = -1;
            var COLORS = ['red', 'green', 'blue'];
            this.el.addEventListener('click', function (evt) {
                lastIndex = (lastIndex + 1) % COLORS.length;
                this.setAttribute('material', 'color', COLORS[lastIndex]);
                console.log('I was clicked at: ', evt.detail.intersection.point);
            });
        }
    });*/



    // --------------- SCORING MANAGEMENT ------------------------------------
    let score = 0;
    const increaseScore = () => {
        score++;
    }

    const updateScoreDisplay = () => {
        const scoreElement = document.getElementById('scoreEntity');
        scoreElement.setAttribute('text', {
            font: 'mozillavr',
            value: 'SCORE :' + score,
            color: 'red',
            wrapCount: '10.000'
        })
    }



    /*AFRAME.registerComponent('scoring', {
        init: function(){
            console.log('scoring is registered')
        }
    })*/
    AFRAME.registerComponent('school-playground', {
        init: function () {
            // Solution for Handling Events.
            const sceneEl = document.querySelector('a-scene');
            const boxEl = sceneEl.querySelector('a-box')

            // scoreElement.setAttribute('value', 'CECI EST UN TEST');


            console.log('setting up click')
            boxEl.addEventListener('click', (e) => {
                increaseScore();
                updateScoreDisplay();
                boxEl.setAttribute('color', 'green');   // set to green
            });

        }
    });






}

const onTriggeredRaycast = () => {
    console.log('triggered')
}


setup();
