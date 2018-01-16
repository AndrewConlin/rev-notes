<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>Register</h1>
	<form method="POST" action="register">
	<!-- 	<input type="hidden"  name="${_csrf.parameterName}"   value="${_csrf.token}"/> -->
		<input type="text" name="username" placeholder="username" />
		<input type="text" name="password" placeholder="password" />
		<input type="submit" value="register" />
	</form>
</body>
</html>