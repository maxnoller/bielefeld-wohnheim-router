wget -q --spider http://google.com
if [ $? -eq 0 ]
then
    true
else
    echo "Could not connect to http://google.com. Restarting UniAuth"
    /etc/init.d/UniAuth restart
fi
