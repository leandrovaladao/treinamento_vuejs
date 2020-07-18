FROM python:3.8
ENV PYTHONBUFFERED 1

RUN mkdir /code
WORKDIR /code

ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/

EXPOSE 8000
