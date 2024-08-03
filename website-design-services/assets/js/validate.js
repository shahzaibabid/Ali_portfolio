
// brand sign up code
const api = "https://<?php  echo $domain;?>/server";

$(document).ready(function () {
    /* Telephone Input Start */
    
    let flagInput = document.querySelectorAll('[name="quote[phone]"]');
    
    if (flagInput.length !== 0) {
    
      let ip;
      let ip_value;
    
      $('[name="quote[phone]"]').intlTelInput({
    
        geoIpLookup: function (callback) {
          $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
            ip = resp.ip;
          });
        },
    
        initialCountry: "auto",
        nationalMode: true,
        separateDialCode: true,
    
      }).then(() => {
    
         let pc = $('.selected-dial-code').html();
         let ctry = $('.selected-flag').attr('title').split(':')[0];
    
        $('input[name="code"]').val(pc);
        $('input[name="cip"]').val(ip);
        $('input[name="ctry"]').val(ctry);
    
      });
    
    
    
      $(document).on('click', '.country', function () {
        
        
          let countryDetail = $(this).parent().parent().find('.selected-flag').attr('title');
          countryDetail =  countryDetail.split(':');


          $('input[name="code"]').val(countryDetail[0]);
          $('input[name="ctry"]').val(countryDetail[1]);
    
    
      });
    
    }
})
$(".signupform").each(function(){
  $(this).validate({
    rules: {
        name: {
            minlength: 3,
            required: true
        },
        email: {
            required: true,
        },
        phone: {
            required: !0,
        }
    },
    submitHandler: async function (t, event) {
        var data = $(t).serializeArray();
        event.preventDefault();
        console.log(data)

        await fetch(`${api}/leads/index.php`, {
            method: 'POST',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          })
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data)
            if (data.status) {
                  setTimeout(() => {
                    location.href = "/thankyou.php"
                  }, 1200)
                  return false
                }
              })

    }
});

})
// brand sign up code
