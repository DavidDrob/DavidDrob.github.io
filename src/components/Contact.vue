<template>
  <div class="contact-me">
          <form action="https://formspree.io/f/xoqpzwgk" method="POST">
            <table>
                <tr class="top-tr">
                    <td><input type="text" placeholder="Name" v-model="name" id="name"></td>
                    <td><input type="text" placeholder="E-Mail" v-model="email" name="_replyto" id="email"></td>
                </tr>
                <tr class="other-tr">
                    <td colspan="2"><input type="text" placeholder="Subject" v-model="subject" id="subject"></td>
                </tr>
                <tr class="msg">
                    <td colspan="2"><textarea placeholder="Message" v-model="message" name="message" id="msg"></textarea></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="submit" class="submit" id="submit"></td>
                </tr>
            </table>
          </form>
  </div>
</template>

<script>

export default {
    name: "contact",
    data(){
        return{
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    },
    updated(){
        const submit = document.querySelector("#submit");
        if(this.name != '' && this.email != '' && this.message != ''){
            submit.style.color = 'white';
            submit.style.cursor = 'pointer';
        }
        else{
            submit.style.color = 'rgb(127, 127, 127)';
            submit.style.cursor = 'not-allowed';
        }
    }
}

</script>

<style>
@font-face {
  font-family: gothamMedium;
  src: url(../assets/font/gotham-medium.woff);
}

table{
    border-spacing: 20px;
}
.contact-me{
    background: #1d1d1d77;
    display: flex;
    justify-content: center;
}
td{
    background: #262626;
    padding: 19px 0px 19px 25px;
    width: 422px;
}
input{
    font-size: 24px;
    width: 100%;
    background: none;
    border: none;
    color: white;
    font-family: gothamMedium;
    outline: none;
}
#msg{
    height: 200px;
    font-family: gothamMedium;
}
textarea{
    width: 845px;
    font-size: 24px;
    background: none;
    border: none;
    color: white;
    font-family: gotham;
    outline: none;
}
.submit{
    color: rgb(127, 127, 127);
    cursor: not-allowed;
}

@media screen and (max-width: 768px){
    table{
        border-spacing: 10px;
    }
    td{
       padding: 6px 0px 6px 15px;     
       width: 42px;
    }
    input{
        font-size: 12px;
        width: 100px;
    }
    textarea{
        width: 40px;
    }
    #msg{
        height: 100px;
        width: 100%;
        font-size: 16px;
    }
}
</style>