FROM lambci/lambda:build-python3.6

LABEL maintainer="sharma.shubham6522@gmail.com"

WORKDIR /var/task

# Fancy prompt to remind you are in zappashell
RUN echo 'export PS1="\[\e[36m\]zappashell>\[\e[m\] "' >> /root/.bashrc

# Additional RUN commands here
RUN pip install pymysql
RUN yum -y install mysql mysql-devel mysql-lib
RUN yum -y install MySQL-python
RUN pip install --upgrade pip
RUN pip install mysqlclient
# RUN yum clean all && \
#    yum -y install <stuff>

CMD ["bash"]
