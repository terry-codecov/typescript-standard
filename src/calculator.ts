export default class Calculator {
  private value = 0;
  private calcMode = ""
  constructor(scientificMode = false, value = 0) {
    this.value = value

    if(scientificMode) {
      this.calcMode = "science!"
    } else if(scientificMode && this.value > 0) {
      this.calcMode = "I dont know I'm just making a branching statement"
    } else {
      this.calcMode = "graphing"
    }
  }

  get total() {
    return this.value
  }

  get mode() {
    return this.calcMode
  }

  plus = (num) => {
    this.value = this.value + num
    return this.total
  }

  minus = (num) => {
    this.value = this.value - num
    return this.total
  }


  multiply = (num) => {
    this.value = this.value * num
    return this.total
  }

  c = () => {
    this.value = 0
    return this.total
  }
  
}
