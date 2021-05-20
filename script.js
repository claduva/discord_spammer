console.log('loaded');
i=0;
setInterval( ()=>{
    authtoken="mfa.VlAACtHtWGQKds_O0bExG-1zZGvA4gnb-cTanq9KUqcnTUTpZdRl6raDtGVcGNWqDKuUTTGBpp-HogmIWi5F"
    fetch("https://discord.com/api/v9/channels/558455309354663966/messages", {
    "headers": {
        "accept": "*/*",
        "accept-language": "en-US",
        "authorization": authtoken,
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-super-properties": "eyJvcyI6Ik1hYyBPUyBYIiwiYnJvd3NlciI6IkNocm9tZSIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuMjEyIFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiI5MC4wLjQ0MzAuMjEyIiwib3NfdmVyc2lvbiI6IjEwLjE1LjciLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6ODU0NDcsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9"
    },
    "referrer": "https://discord.com/channels/546072708962582558/558455309354663966",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `{\"content\":\"Sent ${i}\",\"tts\":false}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
    });
    fetch("https://discord.com/api/v9/channels/845082576963895306/messages", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US",
            "authorization": authtoken,
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-super-properties": "eyJvcyI6Ik1hYyBPUyBYIiwiYnJvd3NlciI6IkNocm9tZSIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE1XzcpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85MC4wLjQ0MzAuMjEyIFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiI5MC4wLjQ0MzAuMjEyIiwib3NfdmVyc2lvbiI6IjEwLjE1LjciLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6ODU0NDcsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9"
        },
        "referrer": "https://discord.com/channels/328238851304980481/845082576963895306",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"content\":\"Spam\",\"tts\":false}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    });
    i+=1
} , 2000 )



