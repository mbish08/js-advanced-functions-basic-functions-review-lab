function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*") {
    return function(something="special") {
        return `You are ${flair}${something}${flair}!`
    }
}

const Calculator =  {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function actionApplyer(start, ray) {
    let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}