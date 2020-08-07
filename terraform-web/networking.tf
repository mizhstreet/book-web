resource "aws_internet_gateway" "book-web" {
  vpc_id = aws_vpc.book-web.id
}
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.book-web.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.book-web.id
  }

  tags = {
    Name = "Public route table"
  }
}
resource "aws_route_table_association" "book-web" {
  subnet_id      = aws_subnet.book-web-public-subnet.id
  route_table_id = aws_route_table.public.id
}
resource "aws_security_group" "allow-http" {
  name        = "allow-http"
  description = "allow http inbound traffic"
  vpc_id      = aws_vpc.book-web.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
resource "aws_security_group" "allow-all-outbound" {
  name        = "allow-all-outbound"
  description = "allow all outbound traffic"
  vpc_id      = aws_vpc.book-web.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
resource "aws_security_group" "allow-ssh" {
  name        = "allow-ssh"
  description = "Allow ssh inbound traffic"
  vpc_id      = aws_vpc.book-web.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
resource "aws_subnet" "book-web-public-subnet" {
  availability_zone = "ap-northeast-1a"
  cidr_block        = "10.0.0.0/24"
  vpc_id            = aws_vpc.book-web.id

  tags = {
    Name = "Book web public subnet"
  }
}
resource "aws_vpc" "book-web" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
}
