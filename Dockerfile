FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/kinghansmd/MATRIX-XMD
# RUN rm -rf /root/SUHAIL-XMD/.git
WORKDIR /root/MATRIX-XMD
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ]
