import React from "react";

type User = {
  name: string;
  email: string;
};

const Layout = (props: {
  children: React.ReactNode;
  renderUser: (
    user: User | null // 引数は、User型またはnull
  ) => React.ReactNode;
}) => {
  // ここではハードコーディングしているが、実際は
  // ログインユーザーを特定する処理を経て、
  // userオブジェクトが保持される。
  // userは特定処理に失敗すると、nullになる
  const user = {
    name: "田中太郎",
    email: "taro.tanaka@example.com",
  };
  return (
    <div>
      <header>
        <h1>Web Site</h1>
        <div>{props.renderUser(user)}</div>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export const Component = () => (
  <Layout
    renderUser={(user) => {
      if (!user) return <a>ログイン</a>;
      return <p>こんにちは！{user.name}さん</p>;
    }}
  >
    <div>
      <h2>見出し</h2>
      <p>本文</p>
    </div>
  </Layout>
);
