// const clock = (hour, id, className, name) => {
//   const zone = hour;
//   const parent = id;
//   const child = className;
//   const counter = name;
//   let time;
//   let paragraph;
//   let container;
//   return  {
//     getTime: () => {
//       let date = new Date ()
//       let hours = (date.getHours() + zone)
//       switch (hours) {
//         case 0:
//           hours = 12
//           break
//         case 13:
//           hours = 1
//           break
//         case 14:
//           hours = 2
//           break
//         case 15:
//           hours = 3
//           break
//         case 16:
//           hours = 4
//           break
//         case 17:
//           hours = 5
//           break
//         case 18:
//           hours = 6
//           break
//         case 19:
//           hours = 7
//           break
//         case 20:
//           hours = 8
//           break
//         case 21:
//           hours = 9
//           break
//         case 22:
//           hours = 10
//           break
//         case 23:
//           hours = 11
//           break
//         case 24:
//           hours = 12
//           break
//         default:
//           hours = hours
//     }
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     time = (hours + ':' + minutes + ":" + seconds)
//     paragraph = document.createElement("p")
//   },
//   setClock: () => {
//     console.log(paragraph);
//     console.log(time);
//     container = document.getElementById(parent)
//     console.log(container)
//     let element = container.appendChild(paragraph)
//     element.className = child
//     let newTime = document.createTextNode(time)
//     element.appendChild(newTime)
//   },
//   resetTime: () => {
//     let div = container
//     let nodes = div.childNodes
//     if (div.firstChild) {
//       div.removeChild(nodes[2])
//   }
// }
// }
// }
//
// const currentTime = clock(0, 'container2', 'clock', 'clock')
// let updateClock = setInterv al(() => {
//   currentTime.getTime()
//   currentTime.setClock()
//   currentTime.resetTime()
// }, 500)

class Clock {
  getTime (hour) {
    let date = new Date ()
    let hours = (date.getHours() + hour)
    switch (hours) {
      case 0:
        hours = 12
        break
      case 13:
        hours = 1
        break
      case 14:
        hours = 2
        break
      case 15:
        hours = 3
        break
      case 16:
        hours = 4
        break
      case 17:
        hours = 5
        break
      case 18:
        hours = 6
        break
      case 19:
        hours = 7
        break
      case 20:
        hours = 8
        break
      case 21:
        hours = 9
        break
      case 22:
        hours = 10
        break
      case 23:
        hours = 11
        break
      case 24:
        hours = 12
        break
      default:
        hours = hours
    }
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    this.paragraph = document.createElement("p")
    this.time = (hours + ':' + minutes + ":" + seconds)
  }
  setClock (id, className) {
    this.container = document.getElementById(id)
    this.element = this.container.appendChild(this.paragraph)
    this.element.className = className
    let time = document.createTextNode(this.time)
    this.element.appendChild(time)

  }
  resetTime (name) {
    let div = this.container
    let nodes = div.childNodes
    if (div.firstChild) {
      div.removeChild(nodes[2])
    }
  }
  updateClock (hour, id, className, name) {
    let updateClock = setInterval(() => {
      let newHour = hour;
      currentTime.getTime(newHour)
      currentTime.setClock(id, className)
      currentTime.resetTime(name)
    }, 500)
  }
}
const currentTime = new Clock ()
const centralTime = new Clock ()
const gmtTime = new Clock ()
currentTime.updateClock(0, 'container2', 'clock', 'clock')
centralTime.updateClock(1, 'central', 'clock2', 'clock2')
gmtTime.updateClock(6, 'uk', 'clock3', 'clock3')
