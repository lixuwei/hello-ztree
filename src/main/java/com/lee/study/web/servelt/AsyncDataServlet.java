package  com.lee.study.web.servelt;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AsyncDataServlet extends HttpServlet{

	private static final long serialVersionUID = 8812376452099632103L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		
		System.out.println(req.getParameter("id"));
		System.out.println(req.getParameter("n"));
		System.out.println(req.getParameter("lv"));
		System.out.println(req.getParameter("otherParam"));
		
		PrintWriter writer = resp.getWriter();
		writer.write("[{ id:'031',	name:'n3.n1',	isParent:true},{ id:'032',	name:'n3.n2',	isParent:false},{ id:'033',	name:'n3.n3',	isParent:true},{ id:'034',	name:'n3.n4',	isParent:false}]" +
				"");
		
	}
	
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		doGet(req, resp);
	}
}
