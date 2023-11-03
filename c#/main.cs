void Order()
{
	var V = new int[]{ 2, 1, 4,3, 0 };
	
	for (int i = 0; i <= 3; i++)
	{
		for (int j = 0; j <= 3 - i; j++)
		{
			if (V[j] > V[j + 1])
			{
				var a = V[j];
				V[j] = V[j + 1];
				V[j + 1] = a;
			}
		}
	}
}
