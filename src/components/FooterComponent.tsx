import { MailOutlined, TwitterOutlined, GithubOutlined, DiscordOutlined, LinkedinOutlined } from "@ant-design/icons";
 
 function FooterComponent() {
    return <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 flex justify-around items-center">
      <nav className="">
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover"><MailOutlined /> <span>Email</span></a>
        <a className="link link-hover"><TwitterOutlined /> Twitter</a>
        <a className="link link-hover"><GithubOutlined /> GitHub</a>
        <a className="link link-hover"><DiscordOutlined /> Discord</a>
        <a className="link link-hover"><LinkedinOutlined /> LinkedIn</a>
      </nav>
      <div className="divider divider-horizontal"></div>
      <nav>
        <h6 className="footer-title">Made By</h6>
        <a className="link link-hover" href="https://github.com/NexWan" target="_blank" rel="noopener noreferrer">
          <span className="text-lg font-semibold">NexWan</span>
        </a>
      </nav>
    </footer>;
  }

  export default FooterComponent;