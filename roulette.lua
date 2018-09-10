#!/lounge/bin/janosh -f
math.randomseed(Janosh:epoch())

Janosh:mkarr("/roulette/.")

function receive(handle, message)
    if message == 'setup' then
--      Janosh:wsBroadcast("{}")
    else
      local obj = JSON:decode(message)
      if obj[2] == "submit" then
        local s = Janosh:size("/roulette/.")
        -- detect cheaters by rejecting images with no considerable edges
	local output = Janosh:capture("echo '" .. obj[4] .. "' | convert inline:- -threshold 30% -format %c histogram:info:- | wc -l 2>&1")
        if output == "2\n" then
  	  if s > 0 then
	    local i = math.random(s - 1)
            Janosh:wsSend(handle,Janosh:raw("/roulette/#" .. i))
	  end
          Janosh:append_t("/roulette/.", obj[4])
	else
	  Janosh:wsSend(handle, "cheat")
	end
	
      end
    end
end

-- Open websocket
Janosh:wsOpen(8131)
Janosh:wsOnReceive(receive)

Janosh:forever()
