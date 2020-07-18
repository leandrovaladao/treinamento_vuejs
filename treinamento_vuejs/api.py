from rest_framework import routers
from main import api_views as main_views

router = routers.DefaultRouter()
router.register(r'user', main_views.UserViewset)
router.register(r'posts', main_views.PostsViewset)
router.register(r'albums', main_views.AlbumsViewset)
router.register(r'todos', main_views.ToDosViewset)
router.register(r'checkdata', main_views.CheckData, basename='checkdata')