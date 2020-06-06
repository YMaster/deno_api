const doConnectTls = async () => {
  const conn1 = await Deno.connectTls({ port: 80 });
  const conn2 = await Deno.connectTls({ certFile: "./certs/my_custom_root_CA.pem", hostname: "192.0.2.1", port: 80 });
  const conn3 = await Deno.connectTls({ hostname: "[2001:db8::1]", port: 80 });
  const conn4 = await Deno.connectTls({ certFile: "./certs/my_custom_root_CA.pem", hostname: "golang.org", port: 80 });
}

doConnectTls()

// error: Uncaught ConnectionRefused: 由于目标计算机积极拒绝，无法连接。 (os error 10061)