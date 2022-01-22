            // window.alert("Click OK to continue"). Tiramos esse comando de uso. Foi só pra aula 1.
            // window.confirm("How do you like JS?"). Tiramos esse comando de uso. Foi só pra aula 1.

var nome = window.prompt("What's your name?")
window.alert("It's a great pleasure to meet you, " + nome + "!")
            // The + (plus) signal produces concatenation.

            //  Double slash is for a one line comment in JS. We are IN JS as everything between the "script" opening and closing tags is JS.

            /*
                Slash + asterisk is to OPEN a comment od more than one line in JS.

                Asterisk + slash is to close the multiple line comment.

                Comments are useful to explain parts of the code for either yourself in the future or some other person that has to check the code for any reason.
            */

var n1 = Number.parseInt(window.prompt("Digite um número: ")) // SEE COMMENT BELOW
var n2 = Number.parseInt(window.prompt("Digite outro número: "))
var s = n1 + n2
window.alert(`A soma de ${n1} e ${n2} é ${s}`) // Concatenação agora atualizada para o modo Template literals (Template strings).

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
                        res.innerHTML += `<p>Always use safety belt.</p>`
                    }
    
    