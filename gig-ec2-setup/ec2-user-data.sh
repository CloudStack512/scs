#!/bin/bash
yum update -y
amazon-linux-extras install nginx1 -y
systemctl start nginx
systemctl enable nginx
cat <<HTML > /usr/share/nginx/html/index.html
<!DOCTYPE html>
<html>
<head>
<title>Hello from EC2</title>
</head>
<body>
<h1>Hello from EC2 in region: $(curl -s http://169.254.169.254/latest/dynamic/instance-identity/document | jq -r '.region')</h1>
<p>Current server time: $(date)</p>
</body>
</html>
HTML
