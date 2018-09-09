#!/lounge/bin/janosh -f
math.randomseed(Janosh:epoch())

Janosh:mkarr("/roulette/.")

function receive(handle, message)
    if message == 'setup' then
      Janosh:wsBroadcast("{}")
    else
      local obj = JSON:decode(message)
      if obj[2] == "submit" then
        local s = Janosh:size("/images/.")
	if s == 0 then
		return	
	end
	local i = math.random(s - 1)
        Janosh:publish(handle,"clear", "W", "")
        Janosh:wsSend(handle,Janosh:raw("/roulette/#" .. i))
        Janosh:append_t("/roulette/..", obj[4]);
      end
    end
end

-- Open websocket
Janosh:wsOpen(8121)
Janosh:wsOnReceive(receive)

Janosh:forever()
