FROM quay.io/MATRIXtechinfo/MATRIX-v2
RUN git clone https://github.com/mrhanstz/MATRIX-MD /root/MATRIX-MD
# RUN rm -rf /root/MATRIX/.git
WORKDIR /root/MATRIX-XMD
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ]
