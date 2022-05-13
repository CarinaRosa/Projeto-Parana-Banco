const users = [
	{
		login: 'brunohs',
		email: 'brunohs@pbtech.net.br',
		age: 18
	},
	{
		login: 'thainabcc',
		email: 'thaina.biudes@gmail.com',
		age: 25
	},
	{
		login: 'annecl',
		email: 'annecl@pbtech.net.br',
		age: 34
	},
    {
        login: 'willianfl',
        email: 'willianfl@pbtech.net.br',
        age: 30
    },
    {
        login: 'lucasplc',
        email: 'lucasplc@pbtech.net.br',
        age: 20
    }
];

const getEmail = el => el.email
console.log = users.map(getEmail)
// const event = document.getElementById("email").innerHTML


function ValidateForm() {
    /*
        1. Referenciar elementos dos campos do formulário pelo ID
        2. Verificar se a senha e o e-mail estão válidos 
        3. Se tudo estiver ok, alertar o usuário que o formulário foi submetido

        Plus: Alertar o usuário quando o e-mail ou senha estiverem vazios ou incorretos.
    */

    // console.log(alert('Hello!'))
    const usuario = document.getElementById("email").value
    const senha = document.getElementById("passwd").value
    const pass = 127


    
    if (getEmail != usuario.value && senha != pass) {
        console.log(alert('Email e/ou senha estão errados. Verifique e tente novamente.'))     
    } else {
        console.log(alert('Bem Vindo ao Portal!'))
    }


    
}