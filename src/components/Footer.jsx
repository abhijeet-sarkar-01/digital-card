import github from "../assets/github.png"
import twitter from "../assets/twitter.png"
import linktree from "../assets/linktree.png"



export default function Footer() {
  return (
    <div className="footer">
      <p><small>Made with 🔥 by <a href="" target = "_blank" rel="noreferrer">Abhijeet</a></small></p>
  
      <p><small>Also make sure to check these out!</small></p>
      <a href="https://github.com/abhijeet-sarkar-01" target = "_blank" rel = "noreferrer"><img src={github} alt="" /></a>
      <a href="https://twitter.com/Abhijeet_ftw" target = "_blank" rel = "noreferrer"><img src={twitter} alt="" /></a>
      <a href="https://linktr.ee/abhijeet_sarkar" target = "_blank" rel = "noreferrer"><img src={linktree} alt="" /></a>

    </div>
  )
}