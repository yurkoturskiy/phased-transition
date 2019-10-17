import React from "react";
import CodeSandboxLogo from "./misc/CodeSandboxLogo";
import GitHubLogo from "./misc/GitHubLogo";
import Caption from "./misc/Caption";

function Footer(props) {
  return (
    <div className="footer">
      <a href="https://codesandbox.io/s/github/guandjoy/phased-transition">
        <CodeSandboxLogo />
      </a>
      <Caption topic="Phased transition" />
      <a href="https://github.com/guandjoy/phased-transition" id="github-link">
        <GitHubLogo />
      </a>
    </div>
  );
}

export default Footer;
