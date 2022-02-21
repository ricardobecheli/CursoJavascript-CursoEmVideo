            // window.alert("Click OK to continue"). Tiramos esse comando de uso. Foi só pra aula 1.
            // window.confirm("How do you like JS?"). Tiramos esse comando de uso. Foi só pra aula 1.

var nome = window.prompt("What's your name?")
window.alert("It's a great pleasure to meet you, " + nome + "!")
    // The + (plus) signal produces concatenation.

    //  Double slash is for a one line comment in JS. We are IN JS as everything between the "script" opening and losing tags is JS.

    /*
        Slash + asterisk is to OPEN a comment od more than one line in JS.

        Asterisk + slash is to close the multiple line comment.

        Comments are useful to explain parts of the code for either yourself in the future or some other person that has to check the code for any reason.
    */

var n1 = Number.parseInt(window.prompt("Type a number: ")) // SEE COMMENT BELOW
var n2 = Number.parseInt(window.prompt("Type another number: "))
var s = n1 * n2
window.alert(`${n1} multiplied by ${n2} is ${s}` + ", " + nome) // Concatenação agora atualizada para o modo Template literals (Template strings).

            /* Must put:

                Number.parseInt

                    For JS stop concatenating the 2 numbers instead of summing them.
                    (i.e. returning 42 instead of 6 for "4 + 2" is concatenating)

                    This command returns an integer number (= no decimals)

                Or...

                    For floating point (real number = a number with decimals) it should be:

                Number.parseFloat.

                    Note the capital letters because they make a difference!

            EVEN BETTER:

                    You can also force JS stop concatenating instead of summing by the command:

                Number(n)

                    And JavaScript will decide if it's an integer or a real number.

            */



function calcular()
    {
        var txtv = window.document.querySelector('input#txtvel')
        var res = window.document.querySelector('div#res')
        var vel = Number(txtv.value)
        res.innerHTML = `<p>Your current speed is <strong> ${vel}  Km/h </strong>.</p>`
        if (vel > 60) {
            res.innerHTML += `<p>You've just received a <strong>speeding ticket</strong>.`
            }
        res.innerHTML += `<p>Always wear a seat belt.</p>`
    }

    function computaridade()
    {
        var idadeval = window.document.querySelector('input#idadevalor')
        var aging = window.document.querySelector('div#aging')
        var years = Number(idadeval.value)
        aging.innerHTML = `<p>Your age is <strong> ${years}  old </strong>.</p>`
        if (years > 40) {
            aging.innerHTML += `<p>You're <strong>fired!</strong>.`
            aging.innerHTML += `<p>Always have a savings account.</p>`
            }
        else {
            aging.innerHTML += `<p> ${years} They're still hiring but "your time is gonna come" (Led Zeppelin)</strong>.`
        }
    }                    
    
    
    function eukvcl()
    {
        var fingerval = window.document.querySelector('input#parouimpar')
        var dispute = window.document.querySelector('div#dispute')
        var oddeven = Number(fingerval.value)
        dispute.innerHTML = `<p>The result is <strong> ${oddeven}</strong>.</p>`
        if (oddeven % 2 == 0) {
            dispute.innerHTML += `<p>And this number is <strong>even!</strong>`
            }
        else {
            dispute.innerHTML += `<p>And this number is <strong>odd!</strong>`
        }

            dispute.innerHTML += `<p>Be a clean player. Always keep your fingers clean.</p>`
            
    }                    
