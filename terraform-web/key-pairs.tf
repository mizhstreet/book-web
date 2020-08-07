resource "aws_key_pair" "book-web-key" {
  key_name   = "book-web-key"
  public_key = file("./mykey.pem")
}
