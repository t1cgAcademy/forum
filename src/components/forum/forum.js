class Forum {
  constructor() {
    this.history = []
  }

  post(post) {
    this.history.append(post)
  }

  summary() {
    this.history.map((post, i) => {
      return (
        <li className={'historyItem'} key={i}>
          <button onClick={() => props.handleClick(i)}>
            <h2>{post.summary}</h2>
            <p>{preview(post.content.split(" "))}</p>

          </button>
        </li>
      )
    })
  }

  preview(arr, str="", count=0) {
    if (arr.length === 0) {
      return str
    }
    if (count > 50) {
      return str + "..."
    }
    var w = arr.shift()
    return preview(arr, str+" "+w, count + w.length)
  }
}

class Comment {
  constructor(name, content) {
    this.date = new Date()
    this.name = name
    this.content = content
    this.replies = []
  }

  reply(comment) {
    this.replies.append(comment)
  }
}


class Post {
  constructor(name, summary, content) {
    this.date = new Date()
    this.name = name
    this.summary = summary
    this.content = content
    this.replies = []
  }

  reply(comment) {
    this.replies.append(comment)
  }

  thread() {
    return (
      <ul>
        {
          this.replies.map((comment, i) => {
            return (
              <li key={i}>
                <h4>{comment.name}</h4>
                <p>{comment.content}</p>
                <button onClick={() => reply(comment)}>reply</button>
                {thread()}
              </li>
            )
          })
        }
      </ul>
    )
  }
}
