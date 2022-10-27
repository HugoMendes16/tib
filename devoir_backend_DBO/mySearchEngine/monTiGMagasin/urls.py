from django.urls import path, register_converter
from monTiGMagasin import views, converts

register_converter(converts.FloatUrlParameterConverter, 'float')
urlpatterns = [
    path('infoproducts/', views.InfoProductList.as_view()),
    path('infoproduct/<int:tig_id>/', views.InfoProductDetail.as_view()),
    path('putonsale/<int:tig_id>/<float:newprice>', views.PutOnSale.as_view()),
    path('removesale/<int:tig_id>/', views.RemoveSale.as_view()),
]
