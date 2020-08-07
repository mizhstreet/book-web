module "book-web" {
  source = "./web-server"

  ami-id    = "ami-011facbea5ec0363b"
  key-pair  = aws_key_pair.book-web-key.key_name
  name      = "book-web"
  subnet-id = aws_subnet.book-web-public-subnet.id
  vpc-security-group-ids = [
    aws_security_group.allow-http.id,
    aws_security_group.allow-ssh.id,
    aws_security_group.allow-all-outbound.id
  ]
}
