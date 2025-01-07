FROM /kinghansmd/MATRIX-XMD
RUN git clone https://github.com/kinghansmd/MATRIX-XMD /root/MATRIX-XMD
# RUN rm -rf /root/MATRIX/.git
WORKDIR /root/MATRIX-XMD
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ]
