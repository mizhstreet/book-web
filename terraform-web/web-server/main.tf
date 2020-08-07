resource "aws_instance" "default" {
  ami                         = var.ami-id
  instance_type               = var.instance-type
  key_name                    = var.key-pair
  subnet_id                   = var.subnet-id
  vpc_security_group_ids      = var.vpc-security-group-ids
  associate_public_ip_address = true
  user_data                   = <<EOF
#!/bin/bash
cd /tmp
EOF

  tags = {
    Name = var.name
  }
}
