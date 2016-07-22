(() => {
  const calculator = {
    init: function(){
      this.cacheDOM();
      this.bindEvent();
      console.log(typeof this.getValue);
    },
    cacheDOM: function() {
      this.num1 = document.getElementsByName('num1')[0];
      this.operator = document.getElementsByName('op')[0];
      this.num2 = document.getElementsByName('num2')[0];
      this.sum = document.getElementById('sum');
    },
    bindEvent: function() {
      this.num1.addEventListener("keyup", this.calculate.bind(this));
      this.num2.addEventListener("keyup", this.calculate.bind(this));
      this.operator.addEventListener("keyup", this.calculate.bind(this));
    },
    getValue: function() {
      this.first = this.num1.value;
      this.second = this.num2.value;
      this.op = this.operator.value;
    },
    calculate: function(){
      this.solution = 0;
      this.getValue();
      if (this.op === "+") {
          this.solution = parseFloat(this.first) + parseFloat(this.second);
      } else if (this.op === "-") {
        this.solution = parseFloat(this.first) - parseFloat(this.second);
      } else if (this.op === "*") {
        this.solution = parseFloat(this.first) * parseFloat(this.second);
      } else {  // Without error-handling, only option left should be division
        this.solution = parseFloat(this.first) / parseFloat(this.second);
      }
      this.render();
    },
    render: function(){
      this.sum.innerHTML = "Solution: " + this.solution;
    }
  };

  calculator.init();
})();
