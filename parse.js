let s = `<a class="overlay" href="/kdog3682/Lbj7f301/"></a>`

let re = /<a class="overlay" href="\/kdog3682\/(.*)\/"><\/a>/g

const log = console.log



function match(str, options = {type: 'all'}) {
  
  let matches = s.matchAll(re)

  for (let match of matches) {
    log(match[1])
  }

}

'  match'(s,)i

'jsdfhsjkfksd':w
