import { project } from '../project'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide footer-inner">
        <p><strong>{project.shortTitle}</strong> · Official project page preview</p>
        <p>Research by Molly Iverson, Ethan Villalovoz, Chandler Juego, and Adam Shtrikman.</p>
        <a href="#overview">Back to top ↑</a>
      </div>
    </footer>
  )
}
