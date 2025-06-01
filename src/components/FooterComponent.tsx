import { MailOutlined, TwitterOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
 
 function FooterComponent() {
    return <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 flex justify-around items-center z-10">
      <nav className="*:2xl:text-lg">
        <h6 className="footer-title 2xl:text-2xl">Contact</h6>
        <a className="link link-hover" href="mailto:lcontrerasmartinez235@gmail.com" target="_blank"><MailOutlined /> <span>Email</span></a>
        <a className="link link-hover" href="https://x.com/OddysDaWan" target="_blank"><TwitterOutlined /> Twitter</a>
        <a className="link link-hover" href="https://github.com/NexWan" target="_blank" ><GithubOutlined /> GitHub</a>
        <a className="link link-hover" href="https://www.linkedin.com/in/leonardo-contreras-martinez-a30843229/"><LinkedinOutlined /> LinkedIn</a>
      </nav>
      <div className="divider divider-horizontal"></div>
      <nav className="*:2xl:text-lg">
        <h6 className="footer-title">Made By</h6>
        <a className="link link-hover" href="https://github.com/NexWan" target="_blank" rel="noopener noreferrer">
          <span className="text-lg font-semibold">NexWan</span>
        </a>
      </nav>
    </footer>;
  }

  export default FooterComponent;