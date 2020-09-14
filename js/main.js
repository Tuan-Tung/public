    function dau(value) {
        document.getElementById("result").value += value;
    }
      function so(value){
        document.getElementById("result").value += value;
      }
    
      function bang() {
        let bang = document.getElementById("result").value;
        document.getElementById("result").value = eval(bang);
      }
      function ac() {
        document.getElementById("result").value = '';
      }
